# ConectaBrasil Web

An innovative satellite internet platform that uses Stellar blockchain technology for secure payments and passkey authentication.

## About the Project

ConectaBrasil is a web application that provides satellite internet access with a modern and secure payment system. The platform allows users to purchase internet packages and make payments through the Stellar network, using biometric authentication via passkey for maximum security.

### Key Features

- **🛰️ Satellite Internet**: High-speed satellite internet access
- **💳 PIX Payments**: Integrated payment system with PIX QR Code
- **🔐 Passkey Authentication**: Secure login using biometrics and passkeys
- **⚡ Stellar Blockchain**: Integration with Stellar network for XLM transactions
- **📱 Responsive Interface**: Modern design adaptable to all devices
- **📊 Personalized Dashboard**: Balance control, package time, and history

### Technologies Used

- **Frontend**: Next.js 15, React, TypeScript, Tailwind CSS
- **Blockchain**: Stellar SDK, Passkey Kit
- **Payments**: PIX, QR Code (qrcode.react)
- **Validation**: Zod for schema validation
- **Authentication**: Passkey Kit with biometric support

## Project Structure

```
src/
├── app/                    # Application pages
│   ├── dashboard/         # User dashboard
│   └── login/             # Login page
├── config/                # Configurations
│   ├── env.ts            # Environment variables
│   └── passkey.ts        # Passkey configuration
├── shared/components/     # Reusable components
└── utils/                # Utilities and contracts
```

## Environment Setup

Create a `.env.local` file with the following variables:

```env
NEXT_PUBLIC_WALLET_WASM_HASH="..."
NEXT_PUBLIC_NATIVE_CONTRACT_ID="..."
NEXT_PUBLIC_NETWORK_PASSPHRASE="Test SDF Network ; September 2015"
NEXT_PUBLIC_RPC_URL="https://soroban-testnet.stellar.org"
NEXT_PUBLIC_LAUNCHTUBE_URL="https://testnet.launchtube.xyz"
NEXT_PUBLIC_LAUNCHTUBE_JWT="..."
NEXT_PUBLIC_MERCURY_PROJECT_NAME="..."
NEXT_PUBLIC_MERCURY_URL="https://api.mercurydata.app"
NEXT_PUBLIC_MERCURY_JWT="..."
```

## Installation and Execution

```bash
# Install dependencies
npm install

# Run in development
npm run dev

# Build for production
npm run build

# Run production
npm start
```

## Detailed Features

### Login System
- Passkey authentication with biometrics
- Stellar wallet integration
- Automatic redirection to dashboard

### User Dashboard
- Real-time XLM balance visualization
- Available package time control
- Internet connection button
- Connectivity status

### Package Purchase
- Internet package catalog (1h, 2h, 1 day, 15 days, monthly, etc.)
- PIX payment with QR Code
- Automatic payment processing
- Purchase confirmation

### Stellar Integration
- Wallet creation and management
- Secure XLM transactions
- Smart contracts for payments
- Automatic contract funding

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Contributing

1. Fork the project
2. Create a branch for your feature (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## License

This project is under the MIT license. See the `LICENSE` file for more details.

---

Developed with ❤️ by the ConectaBrasil team
