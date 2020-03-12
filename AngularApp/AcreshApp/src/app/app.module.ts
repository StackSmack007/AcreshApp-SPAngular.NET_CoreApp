import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { StoreModule } from '@ngrx/store'
import { unreadMsgsReducer } from './store/reducers/unread.msg.reducer';
import { MessagesModule } from './messages/messages.module';
import { RecipesModule } from './recipes/recipes.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { CategoriesModule } from './categories/categories.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RecipesModule,
    IngredientsModule,
    CategoriesModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    AuthModule,
    MessagesModule,
    StoreModule.forRoot({
      userUnread: unreadMsgsReducer
    }),
    BrowserAnimationsModule,
    ToastrModule.forRoot(
      {
        positionClass: 'toast-top-right',
        preventDuplicates: true,
      }
    )
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
