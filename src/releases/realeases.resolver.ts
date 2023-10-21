import { RealeasesService } from './releases.service';

const service = new RealeasesService();
export class RealeasesResolver {
  async findMany() {
    return await service.findAll();
  }
}
