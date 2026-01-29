import React from 'react'
import styles from './ShipmentCard.module.css'

/**
 * ShipmentCard Component
 * Displays individual shipment information in a card format
 * 
 * @param {Object} shipment - Shipment data object
 * @param {string} shipment.trackingNumber - Tracking number
 * @param {string} shipment.status - Current status
 * @param {string} shipment.lastLocation - Last known location
 * @param {string} shipment.estimatedDelivery - Estimated delivery date/time
 * @param {string} shipment.sender - Sender name
 * @param {string} shipment.receiver - Receiver name
 */
const ShipmentCard = ({ shipment }) => {
  // Format the estimated delivery date
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  // Get status-specific CSS class
  const getStatusClass = (status) => {
    const statusMap = {
      'Delivered': styles.statusDelivered,
      'In Transit': styles.statusInTransit,
      'Out for Delivery': styles.statusOutForDelivery,
      'Pending': styles.statusPending,
      'Cancelled': styles.statusCancelled
    }
    return statusMap[status] || styles.statusPending
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3 className={styles.trackingNumber}>{shipment.trackingNumber}</h3>
        <span className={`${styles.statusBadge} ${getStatusClass(shipment.status)}`}>
          {shipment.status}
        </span>
      </div>
      
      <div className={styles.cardBody}>
        <div className={styles.infoRow}>
          <span className={styles.label}>From:</span>
          <span className={styles.value}>{shipment.sender}</span>
        </div>
        
        <div className={styles.infoRow}>
          <span className={styles.label}>To:</span>
          <span className={styles.value}>{shipment.receiver}</span>
        </div>
        
        <div className={styles.infoRow}>
          <span className={styles.label}>Last Location:</span>
          <span className={styles.value}>{shipment.lastLocation}</span>
        </div>
        
        <div className={styles.infoRow}>
          <span className={styles.label}>Estimated Delivery:</span>
          <span className={styles.value}>{formatDate(shipment.estimatedDelivery)}</span>
        </div>
      </div>
    </div>
  )
}

export default ShipmentCard
