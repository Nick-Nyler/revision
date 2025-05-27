from sqlalchemy import create_engine, Column, Integer, String, ForeignKey
from sqlalchemy.orm import declarative_base, relationship, sessionmaker
from sqlalchemy.exc import IntegrityError

Base = declarative_base()

class Instructor(Base):
    __tablename__ = 'instructors'

    id = Column(Integer, primary_key=True)
    _name = Column(String, nullable=False)
    _expertise = Column(String, nullable=False)

    courses = relationship("Course", back_populates="instructor")

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, value):
        if not value or not isinstance(value, str):
            raise ValueError("Name must be a non-empty string")
        self._name = value

    @property
    def expertise(self):
        return self._expertise

    @expertise.setter
    def expertise(self, value):
        if not value or not isinstance(value, str):
            raise ValueError("Expertise must be a non-empty string")
        self._expertise = value

    @classmethod
    def create(cls, session, name, expertise):
        instructor = cls(name=name, expertise=expertise)
        session.add(instructor)
        try:
            session.commit()
            return instructor
        except IntegrityError:
            session.rollback()
            raise ValueError("Instructor with this name already exists")

    @classmethod
    def delete(cls, session, id):
        instructor = session.query(cls).get(id)
        if instructor:
            if instructor.courses:
                raise ValueError("Cannot delete instructor with assigned courses")
            session.delete(instructor)
            session.commit()
            return True
        return False

    @classmethod
    def get_all(cls, session):
        return session.query(cls).all()

    @classmethod
    def find_by_id(cls, session, id):
        return session.query(cls).get(id)

class Course(Base):
    __tablename__ = 'courses'

    id = Column(Integer, primary_key=True)
    _title = Column(String, nullable=False)
    _duration = Column(Integer, nullable=False)
    instructor_id = Column(Integer, ForeignKey('instructors.id'))

    instructor = relationship("Instructor", back_populates="courses")

    @property
    def title(self):
        return self._title

    @title.setter
    def title(self, value):
        if not value or not isinstance(value, str):
            raise ValueError("Title must be a non-empty string")
        self._title = value

    @property
    def duration(self):
        return self._duration

    @duration.setter
    def duration(self, value):
        if not isinstance(value, int) or value <= 0:
            raise ValueError("Duration must be a positive integer")
        self._duration = value

    @classmethod
    def create(cls, session, title, duration, instructor_id=None):
        if instructor_id:
            instructor = session.query(Instructor).get(instructor_id)
            if not instructor:
                raise ValueError("Instructor not found")
        course = cls(title=title, duration=duration, instructor_id=instructor_id)
        session.add(course)
        try:
            session.commit()
            return course
        except IntegrityError:
            session.rollback()
            raise ValueError("Course with this title already exists")

    @classmethod
    def delete(cls, session, id):
        course = session.query(cls).get(id)
        if course:
            session.delete(course)
            session.commit()
            return True
        return False

    @classmethod
    def get_all(cls, session):
        return session.query(cls).all()

    @classmethod
    def find_by_id(cls, session, id):
        return session.query(cls).get(id)