# Portfolio — Trần Đăng Tân

Next.js (App Router) + TypeScript + Tailwind CSS v4, dựng theo design Figma "Portfolio Design (Community)".

## Chạy

```bash
npm install
npm run assets   # tải ảnh/SVG từ Figma về public/figma (link Figma hết hạn sau 7 ngày, tính từ 18/11/2026)
npm run dev
```

## Sửa nội dung

Toàn bộ chữ, kinh nghiệm, kỹ năng, dự án, link mạng xã hội nằm trong `src/data/profile.ts`.
Các dòng có `TODO` là chỗ cần điền theo CV (email, link, tên công ty, ảnh dự án).

Ảnh dự án: thay `public/figma/project-1.png`, `project-2.png` (hoặc đổi đường dẫn `image` trong profile.ts).
Avatar: thay `public/figma/avatar.png`.

## Cấu trúc

- `src/components/Header.tsx` – thanh menu
- `src/components/Hero.tsx` – avatar, tagline, giới thiệu
- `src/components/Experience.tsx` – 4 card kinh nghiệm
- `src/components/Skills.tsx` – icon công nghệ + khối quỹ đạo
- `src/components/Projects.tsx` – dự án nổi bật
- `src/components/Contact.tsx` – liên hệ
