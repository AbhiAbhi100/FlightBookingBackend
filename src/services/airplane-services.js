
import airplaneRepository from '../repositories/airplane-repo.js';

async function createAirplane(data) {
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;
    } catch (error) {
        throw error;
    }
}

export default { createAirplane };
