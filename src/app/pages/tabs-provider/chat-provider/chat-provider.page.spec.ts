import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatProviderPage } from './chat-provider.page';

describe('ChatProviderPage', () => {
  let component: ChatProviderPage;
  let fixture: ComponentFixture<ChatProviderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatProviderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatProviderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
