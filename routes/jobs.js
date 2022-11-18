const express = require('express')

const router = express.Router()
const {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  getJob,
  jobsStats
} = require('../controllers/jobs')

router.route('/').post(createJob).get(getAllJobs)
router.route('/stats').get(jobsStats);
router.route('/:id').get(getJob).delete(deleteJob).patch(updateJob)

module.exports = router
