# 🧩 JSON Schema Builder

A dynamic and extensible form builder built with **React**, **TypeScript**, **React Hook Form**, and **shadcn/ui**, allowing users to interactively construct nested JSON schema definitions. It supports recursive nesting, field type selection, and live schema preview generation.

---

## ✨ Features

- 🧱 Add, edit, and remove schema fields
- 🔁 Support for nested (recursive) schema structures
- ⚙️ Field types: `string`, `number`, `nested`
- 📦 Live JSON preview output
- 🪝 Built using `react-hook-form` for efficient form handling
- 💅 Styled with `Tailwind CSS` and `shadcn/ui` components

---

## 📂 Project Structure
```bash
JSON-Schema-Builder-App/
├── frontend/
│   ├── public/
│   │   └── screenshot.png
│   ├── src/
│   │   ├── components/
│   │   │   ├── schema-builder/
│   │   │   │   ├── FieldRow.tsx
│   │   │   │   └── SchemaBuilder.tsx
│   │   │   └── ui/               # ShadCN UI components (Button, Input, etc.)
│   │   ├── types/
│   │   │   └── schema.ts
│   │   ├── utils/
│   │   │   └── generateSchema.ts
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
└── .gitignore
```

---


## 📸 Demo Screenshot

![Schema Builder Demo](./frontend/public/screenshot.png)

---


## 🧪 Tech Stack

| Tech               | Purpose                           |
|--------------------|------------------------------------|
| React + TypeScript | Frontend with strict typing        |
| react-hook-form    | Form state and dynamic fields      |
| Tailwind CSS       | Utility-first styling              |
| shadcn/ui          | Accessible UI components           |
| uuid               | Unique field identifiers           |

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/jisangeorgekutty/JSON-Schema-Builder-App.git
cd JSON-Schema-Builder-App
```
### 2. Install dependencies
```bash
npm install
# or
yarn install
```
### 3. Run the app
```bash
npm run dev
# or
yarn dev
```

---

## 🚀 Live Demo

Check out the deployed version here: [View Live](https://json-schema-builder-app-henna.vercel.app/)

