import { Router } from 'express';
import bodyParser from 'body-parser';
import {cache} from 'src/middleware/Memory';
import ApiController from 'src/controllers/api/v1/ApiController';
import ApiDetailedSearchController from 'src/controllers/api/v1/ApiDetailedSearchController';
const parseForm = bodyParser.urlencoded({ extended: false });
// Init router and path
const router = Router();

router.get('/trending', parseForm, cache(43200), new ApiController().trending);

router.get('/search', parseForm, cache(604800), new ApiController().search);

/**
 * Detailed search in specific category.
 */
router.get('/search/movie', parseForm, cache(604800), new ApiDetailedSearchController().movie);

router.get('/search/tv', parseForm, cache(604800), new ApiDetailedSearchController().tv);

router.get('/search/person', parseForm, cache(604800), new ApiDetailedSearchController().person);

// Export the base-router
export default router;
