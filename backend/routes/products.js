import adminAuth from '../middleware/adminAuth.js';

router.post('/', adminAuth, async (req, res) => { ... });
router.put('/:id', adminAuth, async (req, res) => { ... });
router.delete('/:id', adminAuth, async (req, res) => { ... });

