import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { InfoService } from './info.service';

describe('InfoService', () => {
  let service: InfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [InfoService]
    });
    service = TestBed.inject(InfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
