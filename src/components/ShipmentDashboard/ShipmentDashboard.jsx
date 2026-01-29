import React, { useState, useEffect } from 'react'
import ShipmentCard from '../ShipmentCard/ShipmentCard'
import shipmentsData from '../../data/shipments.json'
import styles from './ShipmentDashboard.module.css'

/**
 * ShipmentDashboard Component
 * Main container component that fetches and displays shipments
 * Includes filtering by status and sorting by estimated delivery
 */
const ShipmentDashboard = () => {
  const [shipments, setShipments] = useState([])
  const [filteredShipments, setFilteredShipments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filterStatus, setFilterStatus] = useState('All')
  const [sortOrder, setSortOrder] = useState('none')

  // Fetch shipments data (simulating API call)
  useEffect(() => {
    const fetchShipments = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800))
        
        // Simulate API call with imported JSON data
        // In a real app, this would be: const response = await fetch('/api/shipments')
        const data = shipmentsData
        
        if (!data || !Array.isArray(data)) {
          throw new Error('Invalid data format')
        }
        
        setShipments(data)
        setFilteredShipments(data)
      } catch (err) {
        setError(err.message)
        console.error('Error fetching shipments:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchShipments()
  }, [])

  // Handle status filter change
  useEffect(() => {
    let filtered = [...shipments]

    // Apply status filter
    if (filterStatus !== 'All') {
      filtered = filtered.filter(shipment => shipment.status === filterStatus)
    }

    // Apply sorting
    if (sortOrder === 'asc') {
      filtered.sort((a, b) => 
        new Date(a.estimatedDelivery) - new Date(b.estimatedDelivery)
      )
    } else if (sortOrder === 'desc') {
      filtered.sort((a, b) => 
        new Date(b.estimatedDelivery) - new Date(a.estimatedDelivery)
      )
    }

    setFilteredShipments(filtered)
  }, [shipments, filterStatus, sortOrder])

  // Get unique statuses for filter dropdown
  const uniqueStatuses = ['All', ...new Set(shipments.map(s => s.status))]

  // Loading state
  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <p>Loading shipments...</p>
        </div>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>
          <h2>Error Loading Shipments</h2>
          <p>{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className={styles.retryButton}
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Shipment Status Dashboard</h1>
        <p className={styles.subtitle}>
          Track and manage your shipments in real-time
        </p>
      </header>

      <div className={styles.controls}>
        <div className={styles.controlGroup}>
          <label htmlFor="statusFilter" className={styles.label}>
            Filter by Status:
          </label>
          <select
            id="statusFilter"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className={styles.select}
          >
            {uniqueStatuses.map(status => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.controlGroup}>
          <label htmlFor="sortOrder" className={styles.label}>
            Sort by Delivery:
          </label>
          <select
            id="sortOrder"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className={styles.select}
          >
            <option value="none">None</option>
            <option value="asc">Earliest First</option>
            <option value="desc">Latest First</option>
          </select>
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.statCard}>
          <span className={styles.statValue}>{filteredShipments.length}</span>
          <span className={styles.statLabel}>Shipments</span>
        </div>
      </div>

      {filteredShipments.length === 0 ? (
        <div className={styles.emptyState}>
          <p>No shipments found matching your criteria.</p>
        </div>
      ) : (
        <div className={styles.dashboard}>
          {filteredShipments.map(shipment => (
            <ShipmentCard key={shipment.id} shipment={shipment} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ShipmentDashboard
