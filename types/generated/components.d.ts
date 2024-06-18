import type { Schema, Attribute } from '@strapi/strapi';

export interface LessonLesson extends Schema.Component {
  collectionName: 'components_lesson_lessons';
  info: {
    displayName: 'Lesson';
  };
  attributes: {
    time: Attribute.String;
    subject: Attribute.String;
    teacher: Attribute.String;
    classroom: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'lesson.lesson': LessonLesson;
    }
  }
}
