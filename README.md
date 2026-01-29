# Shipment Status Dashboard

A modern, responsive React.js frontend application for tracking and managing shipment statuses. Built with Vite, React hooks, and CSS modules for a clean, professional logistics operations dashboard.

## Features

- 📦 **Shipment Tracking**: View detailed information for multiple shipments
- 🎨 **Status Indicators**: Color-coded status badges (Delivered, In Transit, Out for Delivery, Pending, Cancelled)
- 🔍 **Filtering**: Filter shipments by status
- 📅 **Sorting**: Sort shipments by estimated delivery date
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- ⚡ **Fast Loading**: Optimized with Vite for quick development and builds
- 🎯 **Clean UI**: Modern design with rounded cards, soft shadows, and professional typography

## Project Structure

```
shipment-status-dashboard/
├── public/
├── src/
│   ├── components/
│   │   ├── ShipmentCard/
│   │   │   ├── ShipmentCard.jsx
│   │   │   └── ShipmentCard.module.css
│   │   └── ShipmentDashboard/
│   │       ├── ShipmentDashboard.jsx
│   │       └── ShipmentDashboard.module.css
│   ├── data/
│   │   └── shipments.json
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Setup Instructions

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download the project**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - The app will be available at `http://localhost:5173` (or the port shown in terminal)
   - The page will automatically reload when you make changes

### Build for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `dist` folder.

To preview the production build:

```bash
npm run preview
```

## Technologies Used

- **React 18**: Modern React with functional components and hooks
- **Vite**: Fast build tool and development server
- **CSS Modules**: Scoped CSS for component styling
- **Vanilla CSS**: Clean, modern styling without heavy UI libraries

## Component Details

### ShipmentDashboard
- Main container component
- Fetches shipment data using `useEffect`
- Implements filtering by status
- Implements sorting by estimated delivery date
- Handles loading and error states

### ShipmentCard
- Reusable card component for displaying shipment information
- Shows tracking number, status, sender, receiver, last location, and estimated delivery
- Color-coded status badges
- Responsive design

## Mock Data

The application uses a local JSON file (`src/data/shipments.json`) containing 5 sample shipments. Each shipment includes:

- `id`: Unique identifier
- `trackingNumber`: Tracking number string
- `status`: Current status (Pending, In Transit, Out for Delivery, Delivered, Cancelled)
- `lastLocation`: Last known location
- `estimatedDelivery`: ISO date string for estimated delivery
- `sender`: Sender name
- `receiver`: Receiver name

## Status Colors

- 🟢 **Green** - Delivered
- 🟠 **Orange** - In Transit
- 🔵 **Blue** - Out for Delivery
- 🔴 **Red** - Pending
- ⚪ **Grey** - Cancelled

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Notes

- The app simulates an API call with a loading delay (800ms)
- Error handling is implemented for failed data fetches
- All components use functional components with React hooks
- CSS Modules prevent style conflicts between components
- The design follows a minimal, professional color palette

## Future Enhancements

Potential improvements for future versions:

- Search functionality by tracking number
- Real-time status updates
- Integration with actual API endpoints
- Pagination for large shipment lists
- Export functionality (CSV/PDF)
- Detailed shipment view modal
- Status update history timeline

## License

This project is created for educational purposes as a frontend intern assignment.

## Author

Frontend Intern Assignment - Shipment Status Dashboard
