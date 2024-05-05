import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AxiosService {
    async post(url: string, body: { phone: string, message: string }) {
        try {
            return await axios.post(url, body);
        } catch (error) {
            throw new Error(`Error fetching data: ${error.message}`);
        }
    }

    async get(url: string) {
        try {
            return await axios.get(url);
        } catch (error) {
            throw new Error(`Error fetching data: ${error.message}`);
        }
    }
}
