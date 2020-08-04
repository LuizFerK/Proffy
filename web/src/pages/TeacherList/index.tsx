import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import { Container, SearchTeachers, Input } from './styles';

const TeacherList: React.FC = () => {
  return (
    <Container>
      <PageHeader title="Estes são os proffys disponíveis.">
        <SearchTeachers>
          <Input>
            <label htmlFor="subject">
              Matéria
              <input type="text" id="subject" />
            </label>
          </Input>

          <Input>
            <label htmlFor="week_day">
              Dia da semana
              <input type="text" id="week_day" />
            </label>
          </Input>

          <Input>
            <label htmlFor="time">
              Hora
              <input type="text" id="time" />
            </label>
          </Input>
        </SearchTeachers>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </Container>
  );
};

export default TeacherList;
