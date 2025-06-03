import express from 'express';
import { authMiddleware } from '../middleware/auth.js'; // Assuming this is your authentication middleware
import Station from '../models/Station.js'; // Import your Station Mongoose model

const router = express.Router();

// @route   GET /api/dashboard
// @desc    Get dashboard summary data (station counts and recent stations) for the authenticated user
// @access  Private (requires authentication)
router.get('/', authMiddleware, async (req, res) => {
  try {
    // 1. Fetch all stations from the database
    // In a real application, you might want to filter stations based on the user's organization
    // or ownership if your system supports multi-tenancy. For now, we fetch all.
    const allStations = await Station.find({});

    // 2. Calculate counts based on station status
    const activeStationsCount = allStations.filter(
      (station) => station.status === 'active'
    ).length;
    const inactiveStationsCount = allStations.filter(
      (station) => station.status === 'inactive'
    ).length;
    const maintenanceStationsCount = allStations.filter(
      (station) => station.status === 'maintenance'
    ).length;

    // 3. Get recent stations
    // It's crucial that your Station model has a 'createdAt' timestamp for this.
    // Ensure your StationSchema in models/Station.js has { timestamps: true }
    const recentStations = await Station.find({})
      .sort({ createdAt: -1 }) // Sort by creation date in descending order (most recent first)
      .limit(5); // Limit to the 5 most recent stations

    // 4. Send the aggregated data back to the frontend
    res.json({
      message: `Welcome, ${req.user.name}!`, // Keep the welcome message if desired
      user: req.user, // Keep user data if desired
      recentStations, // Array of recent station objects
      activeStationsCount, // Count of active stations
      inactiveStationsCount, // Count of inactive stations
      maintenanceStationsCount, // Count of stations in maintenance
      totalStationsCount: allStations.length, // Optional: total count of all stations
    });
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

export default router;