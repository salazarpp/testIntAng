import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { InfoService } from './info.service';
import { of } from 'rxjs';
import { mockUnitTestData } from './shared/testData';

describe('InfoService', () => {
  let service: InfoService;

  const dummyListResponse = mockUnitTestData;

  beforeEach(() => {
    const infoServiceMock = {
      getImgData: () => of(
        dummyListResponse
      )
    };
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [
        InfoService,
        { provide: InfoService, useValue: infoServiceMock }
      ]
    });
    service = TestBed.inject(InfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getImgData() should return data', () => {
    service.getImgData('test', 10).subscribe((res) => {
      const respB = JSON.stringify(mockUnitTestData)
      expect(JSON.stringify(res)).toBe(respB);
    });
  });
});
