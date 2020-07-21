import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OffersProviderPage } from './offers-provider.page';

describe('OffersProviderPage', () => {
  let component: OffersProviderPage;
  let fixture: ComponentFixture<OffersProviderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffersProviderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OffersProviderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
