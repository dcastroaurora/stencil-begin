import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'pesonal-card',
  styleUrl: 'personal-card.scss',
})
export class PersonalCard {
  @Prop() firstName: string = '';
  @Prop() lastName: string = '';
  @Prop() photo: string = '';

  render() {
    return (
      <div class="b-personal-card-box">
        <div class="b-personal-card">
          <div class="b-personal-card__photo-container">
            <img class="b-personal-card__photo" src={this.photo} alt="Manuel Rodriguez" />
          </div>
          <h2 class="b-personal-card__full-name">
            {this.firstName} {this.lastName}
          </h2>
          <div class="b-personal-card__resume">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure tempora magni, minus harum pariatur veniam laboriosam quae corporis? Praesentium quos ad cumque maxime
            porro est voluptatibus sit assumenda quo incidunt.
          </div>
        </div>
      </div>
    );
  }
}
