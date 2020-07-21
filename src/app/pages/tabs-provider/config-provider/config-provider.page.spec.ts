import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfigProviderPage } from './config-provider.page';

describe('ConfigProviderPage', () => {
  let component: ConfigProviderPage;
  let fixture: ComponentFixture<ConfigProviderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigProviderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfigProviderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
