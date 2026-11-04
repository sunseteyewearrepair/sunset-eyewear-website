# Sunset Eyewear Repair — website

A plain HTML/CSS site with no build step. Every file in this folder gets published as-is.

## Files

| File | What it is |
|---|---|
| `index.html` | Home page |
| `services.html` | Services offered |
| `mail-in.html` | How to mail in a repair, with a printable repair slip |
| `business.html` | Business account request form |
| `404.html` | "Page not found" page |
| `styles.css` | All colors, fonts and layout |
| `main.js` | Mobile menu, print button, business form |
| `assets/` | Logo and hero artwork |

## Things to fill in

The only placeholder left is your **shipping address** on `mail-in.html`. It shows as a yellow highlighted box; search for `class="todo"` to find it.

## How the business form works

When someone submits the form, their email app opens with a message to info@sunseteyewearrepair.com, pre-filled with their answers. The site doesn't need a server for this. If you'd rather have the form send automatically, without opening an email app, that can be added later with a small Cloudflare Worker.

---

# Getting it live

Do these steps in order. Step 1 can take a few hours to take effect, so start it first.

## 1. Point your domain at Cloudflare

You keep the domain at Squarespace. You're only changing who answers its DNS lookups.

1. In **Cloudflare**, add a site (or "Onboard a domain"), enter `sunseteyewearrepair.com`, and choose the **Free** plan.
2. Cloudflare shows you **two nameservers**. Copy them.
3. In **Squarespace**, go to **Domains → sunseteyewearrepair.com → DNS**.
   - If **DNSSEC** is turned on, turn it off first.
   - Under **Nameservers**, choose **custom nameservers** and paste in Cloudflare's two nameservers, replacing Squarespace's.
4. Go back to Cloudflare and click **Check nameservers**. Cloudflare emails you when the domain is active. This usually takes under an hour but can take up to 24 hours.

## 2. Put the site on GitHub

1. Create a new repository on GitHub, for example `sunset-eyewear-site`. It can be private.
2. Click **Add file → Upload files** and drag in everything from this folder, including the `assets` folder. Commit.

## 3. Host it on Cloudflare

1. In Cloudflare, go to **Workers & Pages → Create** and choose the option to **import / connect a Git repository**. Pick your new repo.
2. Build settings: **no build command**. The output directory is the repo's root (`/`).
3. Deploy. You get a temporary `*.pages.dev` or `*.workers.dev` link. Check the site there.
4. Open **Custom domains** and add both `sunseteyewearrepair.com` and `www.sunseteyewearrepair.com`.

From now on, any change you commit to GitHub goes live automatically within a minute or two.

## 4. Business email forwarding (free)

1. In Cloudflare, open your domain and go to **Email → Email Routing**. Enable it, and let Cloudflare add the MX and TXT records it asks for.
2. Under **Destination addresses**, add the inbox you want mail delivered to, then click the verification link Cloudflare emails you.
3. Under **Routing rules**, create two custom addresses:
   - `info@sunseteyewearrepair.com` → your inbox
4. Test it by sending an email to each address from a different account.

Email Routing only *receives* mail. If you also want to *reply as* matt@ or info@, that needs a sending service, which can be set up next.
