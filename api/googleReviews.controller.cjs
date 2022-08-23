const SerpApi = require("google-search-results-nodejs");
// https://forum.serpapi.com/feature-requests/p/add-http-cors-headers

const apiGetReviews = (req, res, next) => {
  try {
    const search = new SerpApi.GoogleSearch(process.env.SERP_API_KEY);
    search.json(
      {
        engine: "google_maps_reviews",
        data_id: "0x80d7712240ac7cc7:0x907301c9358d6b17",
        hl: "en",
      },
      (result) => {
        if (result.reviews.length > 0) {
          res.json({ reviews: result.reviews });
        } else {
          res.json({ reviews: [] });
        }
      }
    );
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.apiGetReviews = apiGetReviews;
