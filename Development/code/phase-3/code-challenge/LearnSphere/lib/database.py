from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models import Base, Instructor, Course

engine = create_engine('sqlite:///data/courses.db')
Base.metadata.create_all(engine)
Session = sessionmaker(bind=engine)

def initialize_database():
    session = Session()
    if session.query(Instructor).count() > 0:
        session.query(Course).delete()
        session.query(Instructor).delete()
        session.commit()
    
    instructors = [
        {"name": "Alice Johnson", "expertise": "Python Programming"},
        {"name": "Carlos Rivera", "expertise": "Data Science"},
        {"name": "Priya Sharma", "expertise": "Graphic Design"},
        {"name": "Michael Chen", "expertise": "Machine Learning"},
        {"name": "Emma Watson", "expertise": "Web Development"},
    ]
    
    for instr in instructors:
        try:
            Instructor.create(session, instr["name"], instr["expertise"])
        except ValueError:
            continue
    
    courses = [
        {"title": "Introduction to Python", "duration": 10, "instructor_name": "Alice Johnson"},
        {"title": "Advanced Python Techniques", "duration": 12, "instructor_name": "Alice Johnson"},
        {"title": "Data Analysis with Pandas", "duration": 8, "instructor_name": "Carlos Rivera"},
        {"title": "Machine Learning Basics", "duration": 15, "instructor_name": "Michael Chen"},
        {"title": "Web Development with React", "duration": 20, "instructor_name": "Emma Watson"},
        {"title": "Photoshop for Beginners", "duration": 12, "instructor_name": "Priya Sharma"},
        {"title": "Data Visualization with Tableau", "duration": 6, "instructor_name": "Carlos Rivera"},
        {"title": "Full-Stack Development", "duration": 25, "instructor_name": "Emma Watson"},
    ]
    
    for course in courses:
        instructor = session.query(Instructor).filter_by(name=course["instructor_name"]).first()
        if instructor:
            try:
                Course.create(session, course["title"], course["duration"], instructor.id)
            except ValueError:
                continue
    
    session.commit()