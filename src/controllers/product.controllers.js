import { productService } from '../services/index.js';
import asyncHandler from '../helpers/asyncHandler.js';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import customResponse from '../helpers/response.js';

export const createProduct = asyncHandler(async (req, res) => {
    const pro = await productService.createProduct(req.body, req.files);
    return res.status(StatusCodes.OK).json(
        customResponse({
            data: pro,
            success: true,
            status: StatusCodes.OK,
            message: ReasonPhrases.OK,
        }),
    );
});
