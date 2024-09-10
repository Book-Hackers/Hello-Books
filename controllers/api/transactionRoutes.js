const express = require('express');
const router = express.Router();
const { Transaction } = require('../../models');
const withAuth = require('../../utils/auth');

router.put('/:id', withAuth, async (req, res) => {
    console.log(req.params)
    try {
        const updatedTransaction = await Transaction.update(
            { status: req.body.status },
            { where: { id: req.params.id, seller_id: req.session.user_id } }
        );

        if (!updatedTransaction[0]) {
            res.status(404).json({ message: 'No transaction found with this id!' });
            return;
        }

        res.status(200).json({ message: 'Transaction status updated successfully!' });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;