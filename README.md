
# Invitao

Invitao is a premium, full-stack digital solution designed to transform traditional wedding invitations into interactive experiences. It features dynamic content delivery, real-time countdowns, and a high-performance Anonymous Media Gallery that allows guests to upload memories directly to the cloud without needing a Google account.


## System Architecture

The project implements a unique Hybrid Storage Architecture to ensure zero load on the main VPS while maintaining maximum privacy and security.

Core API (Laravel 11): Manages invitation data, guest lists, and the "Live" status of events.

Frontend (Next.js 15): A high-performance UI using Server Components for SEO and Client Components for interactive uploads.

Storage Tunnel (Google Apps Script): Acts as a secure middleware that receives compressed images and routes them to specific Google Drive folders based on the wedding slug.

##  Key Features
#### High-Speed Photo Shuttling
- Parallel Multi-Upload: Uses Promise.all to push multiple images simultaneously.

- Client-Side Compression: Automatically shrinks 10MB+ high-res mobile photos to <1MB WebP/JPEG in the browser using browser-image-compression.

- Google Drive Bypass: Allows any guest to upload files without being logged into a Google account.

####  Smart Management
- Remote Kill-Switch: Enable or disable the photo upload feature globally from the Laravel database.

- Local Persistence: Uses localStorage to cache the wedding album URL on the guest's device for instant access.

- Dynamic Routing: Automatically creates and organizes Google Drive folders based on the unique wedding slug.

#### Elegant UI/UX
- Garamond Typography: A sophisticated, high-end look tailored for wedding aesthetics.

- Responsive Invitation: Optimized for both mobile scanning (QR codes) and desktop viewing.
## Tech Stack

**Frontend:** Next.js 15 (App Router), TypeScript, Tailwind CSS

**Backend:** Laravel 11 (REST API), MySQL

**Cloud / Scripting** Google Cloud with Google Apps Script (JavaScript/V8)

