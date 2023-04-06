const express = require('express');

const fetch = require('node-fetch');

const router = express.Router();

const helper = require('../helper');

const mulesoftBaseEndpoint = 'https://employeesapi-demoforshift.us-e2.cloudhub.io/api/employees';

/* GET employees listing. */
router.route('/').get(async (req, res) => {
  try {
    const apiResponse = await fetch(mulesoftBaseEndpoint);

    const data = helper.emptyOrRows(await apiResponse.json());

    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(helper.messageResponse(err.message));
  }
});

/* GET employee by Id. */
router.route('/:id').get(async (req, res) => {
  try {
    const { id } = req.params;
    const apiResponse = await fetch(`${mulesoftBaseEndpoint}/${id}`);

    const data = helper.emptyOrRows(await apiResponse.json());

    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(helper.messageResponse(err.message));
  }
});

/* DELETE employee by Id. */
router.route('/:id').delete(async (req, res) => {
  try {
    const { id } = req.params;
    const apiResponse = await fetch(`${mulesoftBaseEndpoint}/${id}`, {
      method: 'DELETE',
    });

    const data = helper.emptyOrRows(await apiResponse.json());

    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(helper.messageResponse(err.message));
  }
});

/* Insert employee. */
router.route('/').post(async (req, res) => {
  try {
    const apiResponse = await fetch(`${mulesoftBaseEndpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    const data = helper.emptyOrRows(await apiResponse.json());

    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(helper.messageResponse(err.message));
  }
});

/* Update employee. */
router.route('/:id').post(async (req, res) => {
  try {
    const { id } = req.params;
    const apiResponse = await fetch(`${mulesoftBaseEndpoint}/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    const data = helper.emptyOrRows(await apiResponse.json());

    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(helper.messageResponse(err.message));
  }
});

module.exports = router;
