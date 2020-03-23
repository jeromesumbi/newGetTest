const member = require("../../member");
const uuid = require("uuid");
const express = require("express");
const router = express();

router.get("", (req, res) => res.json(member));

router.get("/:id", (req, res) => {
  const found = member.some(member => member.id === parseInt(req.params.id));

  if (found) {
    res.json(member.filter(member => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

// Create new member
router.post("/", (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: "active"
  };
  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: "Please fill Name and Email" });
  }
  member.push(newMember);
  res.json(member);
});

// Update member
router.put("/:id", (req, res) => {
  const found = member.some(member => member.id === parseInt(req.params.id));

  if (found) {
    const updateMember = req.body;
    member.forEach(member => {
      if (member.id === parseInt(req.param.id)) {
        member.name = updateMember.name ? updateMember.name : req.body.name;
        member.email = updateMember.email ? updateMember.email : req.body.email;
        res.json({ msg: "Member Updated", member });
      }
    });
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});
module.exports = router;
