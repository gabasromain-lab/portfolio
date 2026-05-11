"""
🎯 Alertes emploi automatiques - UI/Product Designer
Auteur : script généré pour gabasromain@gmail.com

SETUP (à faire une seule fois) :
  1. pip install google-genai
  2. Crée une clé API gratuite sur https://aistudio.google.com/apikey
  3. Dans ton terminal PowerShell :
     [System.Environment]::SetEnvironmentVariable("GEMINI_API_KEY", "ta-clé-ici", "User")
  4. Le mot de passe Gmail est déjà configuré ci-dessous

LANCER LE SCRIPT :
  $env:GEMINI_API_KEY = [System.Environment]::GetEnvironmentVariable("GEMINI_API_KEY", "User")
  & "C:\\Users\\roman\\AppData\\Local\\Programs\\Python\\Python314\\python.exe" d:\\romain-gabas-portfolio\\job_alert.py
"""

import os
import smtplib
import json
import urllib.parse
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from datetime import datetime
from google import genai
from google.genai import types

# ─────────────────────────────────────────
# 🔧 CONFIG
# ─────────────────────────────────────────

GMAIL_ADDRESS      = "gabasromain@gmail.com"
GMAIL_APP_PASSWORD = "jspo utpd tppz ougy"

PROFIL = """
Je suis UI Designer / Product Designer avec de l'expérience en conception d'interfaces,
design système, prototypage Figma, recherche utilisateur et collaboration avec des équipes
produit et développement.

Je cherche un poste en :
- UI Designer, Product Designer, UX/UI Designer
- Localisation : Paris, Île-de-France, région parisienne, département 78 (Yvelines)
- Télétravail partiel accepté
- CDI ou freelance mission longue

Mes compétences clés : Figma, design system, prototypage, user research, Zeplin, Notion, Jira
"""

# ─────────────────────────────────────────
# 🔗 Lien fallback par plateforme
# ─────────────────────────────────────────

SEARCH_URLS = {
    "LinkedIn":   "https://www.linkedin.com/jobs/search/?keywords={query}&location=Paris",
    "WTTJ":       "https://www.welcometothejungle.com/fr/jobs?query={query}&aroundQuery=Paris",
    "Indeed":     "https://fr.indeed.com/jobs?q={query}&l=Paris",
    "Cadremploi": "https://www.cadremploi.fr/emploi/liste_offres.html?kw={query}&li=Paris",
    "APEC":       "https://www.apec.fr/candidat/recherche-emploi.html/emploi?motsCles={query}",
    "Glassdoor":  "https://www.glassdoor.fr/Emploi/paris-{query}-emplois.htm",
}

def get_lien(offre):
    lien = offre.get("lien", "")
    homepages = [
        "linkedin.com/jobs", "welcometothejungle.com", "indeed.fr", "indeed.com",
        "cadremploi.fr", "apec.fr", "glassdoor.fr"
    ]
    lien_homepage = not lien or lien in ("NON_DISPONIBLE", "#") or any(
        lien.rstrip("/") in [f"https://www.{h}", f"https://{h}"] for h in homepages
    )

    if lien and not lien_homepage and lien.startswith("http"):
        return lien, "Voir l'offre →"

    source = offre.get("source", "LinkedIn")
    query = urllib.parse.quote_plus(f"{offre.get('titre', 'UI Designer')} {offre.get('entreprise', '')}".strip())
    base = SEARCH_URLS.get(source, SEARCH_URLS["LinkedIn"])
    return base.format(query=query), "Rechercher cette offre →"


# ─────────────────────────────────────────
# 🤖 Recherche via Gemini + Google Search
# ─────────────────────────────────────────

def rechercher_offres():
    print("🔍 Recherche des offres en cours...")

    client = genai.Client(api_key=os.environ.get("GEMINI_API_KEY"))

    # Étape 1 : recherche web
    prompt_recherche = f"""
Tu es un assistant spécialisé dans la recherche d'emploi en France.

Voici le profil du candidat :
{PROFIL}

Recherche sur le web des offres d'emploi publiées il y a moins de 7 jours pour ce profil.
Cible : LinkedIn, Welcome to the Jungle, Indeed, Cadremploi, APEC.
Trouve les 5 meilleures offres et pour chacune donne :
- Titre du poste
- Entreprise
- Localisation
- Type de contrat (CDI / CDD / Freelance)
- Télétravail (Oui / Non / Hybride)
- Salaire si mentionné
- Lien DIRECT vers l'offre (pas la homepage du site, sinon écris NON_DISPONIBLE)
- Pourquoi cette offre correspond bien au profil
"""

    response1 = client.models.generate_content(
        model="gemini-2.0-flash-lite",
        contents=prompt_recherche,
        config=types.GenerateContentConfig(
            tools=[types.Tool(google_search=types.GoogleSearch())]
        )
    )

    texte_brut = response1.text
    print("✅ Recherche terminée, formatage en cours...")

    # Étape 2 : formatage JSON (sans search, pas de limite)
    prompt_json = f"""
Voici des offres d'emploi trouvées pour un UI/Product Designer :

{texte_brut}

Transforme en JSON valide UNIQUEMENT, sans texte autour, sans markdown :
{{
  "date_recherche": "{datetime.now().strftime('%Y-%m-%d')}",
  "nombre_offres": 5,
  "offres": [
    {{
      "titre": "Titre du poste",
      "entreprise": "Nom entreprise",
      "localisation": "Ville, département",
      "type_contrat": "CDI / Freelance / CDD",
      "teletravail": "Oui / Non / Hybride",
      "salaire": "45-55k€ ou Non précisé",
      "lien": "https://... ou NON_DISPONIBLE",
      "score_compatibilite": 92,
      "raison_score": "Explication courte",
      "points_forts": ["point 1", "point 2"],
      "source": "LinkedIn / WTTJ / Indeed..."
    }}
  ],
  "conseil_semaine": "Un conseil personnalisé pour optimiser la recherche"
}}
"""

    response2 = client.models.generate_content(
        model="gemini-2.0-flash-lite",
        contents=prompt_json
    )

    texte = response2.text.strip()
    if "```" in texte:
        texte = texte.split("```")[1]
        if texte.startswith("json"):
            texte = texte[4:]
    texte = texte.strip()

    return json.loads(texte)


# ─────────────────────────────────────────
# 📧 Génération de l'email HTML
# ─────────────────────────────────────────

def generer_email_html(data):
    date = datetime.now().strftime("%d/%m/%Y")
    offres_html = ""

    for offre in data.get("offres", []):
        score = offre.get("score_compatibilite", 0)
        couleur_score = "#22c55e" if score >= 80 else "#f59e0b" if score >= 60 else "#ef4444"

        points_forts = "".join(
            f"<li style='margin:3px 0; color:#374151;'>✓ {p}</li>"
            for p in offre.get("points_forts", [])
        )

        teletravail_badge = ""
        if offre.get("teletravail") in ["Oui", "Hybride"]:
            teletravail_badge = f"<span style='background:#dbeafe; color:#1d4ed8; padding:2px 8px; border-radius:4px; font-size:12px; margin-left:6px;'>🏠 {offre.get('teletravail')}</span>"

        lien_url, lien_label = get_lien(offre)

        offres_html += f"""
        <div style="background:white; border:1px solid #e5e7eb; border-radius:12px; padding:20px; margin-bottom:16px; border-left:4px solid {couleur_score};">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:8px;">
                <div>
                    <h3 style="margin:0 0 4px 0; color:#111827; font-size:17px;">{offre.get('titre', '')}</h3>
                    <p style="margin:0; color:#6b7280; font-size:14px;">
                        🏢 <strong>{offre.get('entreprise', '')}</strong> &nbsp;·&nbsp;
                        📍 {offre.get('localisation', '')} &nbsp;·&nbsp;
                        📄 {offre.get('type_contrat', '')}
                        {teletravail_badge}
                    </p>
                </div>
                <div style="text-align:center; background:{couleur_score}; color:white; padding:8px 14px; border-radius:10px; font-weight:bold; white-space:nowrap;">
                    {score}% match
                </div>
            </div>

            <p style="margin:10px 0 4px 0; color:#374151; font-size:13px; font-style:italic;">
                {offre.get('raison_score', '')}
            </p>

            {"<ul style='margin:8px 0; padding-left:18px; font-size:13px;'>" + points_forts + "</ul>" if points_forts else ""}

            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:12px; flex-wrap:wrap; gap:8px;">
                <span style="color:#6b7280; font-size:13px;">💰 {offre.get('salaire', 'Non précisé')} &nbsp;·&nbsp; via {offre.get('source', '')}</span>
                <a href="{lien_url}" style="background:#4f46e5; color:white; padding:8px 16px; border-radius:8px; text-decoration:none; font-size:13px; font-weight:600;">
                    {lien_label}
                </a>
            </div>
        </div>
        """

    conseil = data.get("conseil_semaine", "")
    conseil_html = f"""
    <div style="background:#fef3c7; border:1px solid #fcd34d; border-radius:12px; padding:16px; margin-top:8px;">
        <p style="margin:0; color:#92400e; font-size:14px;">
            💡 <strong>Conseil de la semaine :</strong> {conseil}
        </p>
    </div>
    """ if conseil else ""

    return f"""
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"></head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background:#f9fafb; margin:0; padding:20px;">
        <div style="max-width:620px; margin:0 auto;">
            <div style="background:linear-gradient(135deg, #4f46e5, #7c3aed); border-radius:16px; padding:28px; margin-bottom:20px; color:white;">
                <h1 style="margin:0 0 6px 0; font-size:22px;">🎯 Tes offres UI/Product Designer</h1>
                <p style="margin:0; opacity:0.85; font-size:14px;">
                    {data.get('nombre_offres', 0)} offres sélectionnées · Paris & Île-de-France · {date}
                </p>
            </div>
            {offres_html}
            {conseil_html}
            <p style="text-align:center; color:#9ca3af; font-size:12px; margin-top:24px;">
                Généré automatiquement par ton assistant emploi ·
                <a href="mailto:{GMAIL_ADDRESS}" style="color:#6b7280;">Se désabonner</a>
            </p>
        </div>
    </body>
    </html>
    """


# ─────────────────────────────────────────
# 📤 Envoi de l'email
# ─────────────────────────────────────────

def envoyer_email(html_content, nb_offres):
    print("📧 Envoi de l'email...")

    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"🎯 {nb_offres} offres UI Designer – {datetime.now().strftime('%d/%m/%Y')}"
    msg["From"]    = GMAIL_ADDRESS
    msg["To"]      = GMAIL_ADDRESS
    msg.attach(MIMEText(html_content, "html"))

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
        server.login(GMAIL_ADDRESS, GMAIL_APP_PASSWORD)
        server.sendmail(GMAIL_ADDRESS, GMAIL_ADDRESS, msg.as_string())

    print(f"✅ Email envoyé à {GMAIL_ADDRESS} !")


# ─────────────────────────────────────────
# 🚀 Main
# ─────────────────────────────────────────

if __name__ == "__main__":
    print("=" * 50)
    print("🚀 Démarrage de la recherche d'offres...")
    print("=" * 50)

    try:
        data = rechercher_offres()
        html = generer_email_html(data)
        envoyer_email(html, data.get("nombre_offres", 0))
        print("\n✅ Terminé ! Vérifie ta boîte mail.")

    except json.JSONDecodeError as e:
        print(f"❌ Erreur parsing JSON : {e}")
        print("   → Relance le script")

    except smtplib.SMTPAuthenticationError:
        print("❌ Erreur Gmail : mot de passe d'application incorrect")
        print("   → Va sur https://myaccount.google.com/apppasswords")

    except Exception as e:
        print(f"❌ Erreur inattendue : {e}")
