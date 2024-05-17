import { NaveService } from './nave.service';
import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('Service: Course', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NaveService]
    });
  });

  it('should ...', inject([NaveService], (service: NaveService) => {
    expect(service).toBeTruthy();
  }));
});