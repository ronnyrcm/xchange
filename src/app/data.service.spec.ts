import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { DataService } from './data.service';

describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [DataService]
    });
  });

  it('should be created', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));

  it('should return value', inject([DataService], (service: DataService) => {
    //expect(service.getData('USD', 'EUR', '0')).toBe('observable value');
    expect(service.getData('USD', 'EUR', '0')).toEqual('0.0000');
    
  }));

  /*it('should return value', () => {
    const stubValue = '66';

    let service: DataService = TestBed.get(DataService);
    //expect(service.getData('USD', 'EUR', '0')).toBe('real value');
    //expect(service.getData('USD', 'EUR', '0')).toBe('observable value');
    expect(service.getData('USD', 'EUR', '0')).toBe('promise value');
  });*/

});
