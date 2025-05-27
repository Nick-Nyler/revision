import click
from models import Instructor, Course
from database import Session, initialize_database

@click.group()
def cli():
    pass

@cli.command(name="main-menu")
def main_menu():
    initialize_database()  # Load sample data on startup
    session = Session()
    while True:
        click.echo("\nWelcome to LearnSphere - Your E-Learning Platform")
        click.echo("1. Manage Instructors")
        click.echo("2. Manage Courses")
        click.echo("3. Exit")
        choice = click.prompt("Select an option", type=int, default=0)
        
        if choice == 1:
            instructor_menu(session)
        elif choice == 2:
            course_menu(session)
        elif choice == 3:
            click.echo("Thank you for using LearnSphere! Goodbye!")
            break
        else:
            click.echo("Invalid option. Try again.")

def instructor_menu(session):
    while True:
        click.echo("\nLearnSphere Instructor Menu")
        click.echo("1. Create Instructor")
        click.echo("2. Delete Instructor")
        click.echo("3. List All Instructors")
        click.echo("4. Find Instructor by ID")
        click.echo("5. View Instructor's Courses")
        click.echo("6. Back")
        choice = click.prompt("Select an option", type=int, default=0)
        
        if choice == 1:
            name = click.prompt("Enter instructor name")
            expertise = click.prompt("Enter expertise")
            try:
                instructor = Instructor.create(session, name, expertise)
                click.echo(f"Instructor {instructor.name} created with ID {instructor.id} on LearnSphere!")
            except ValueError as e:
                click.echo(f"Error: {e}")
        elif choice == 2:
            id = click.prompt("Enter instructor ID", type=int)
            try:
                if Instructor.delete(session, id):
                    click.echo("Instructor deleted from LearnSphere!")
                else:
                    click.echo("Instructor not found.")
            except ValueError as e:
                click.echo(f"Error: {e}")
        elif choice == 3:
            instructors = Instructor.get_all(session)
            if not instructors:
                click.echo("No instructors found on LearnSphere.")
            for instructor in instructors:
                click.echo(f"ID: {instructor.id}, Name: {instructor.name}, Expertise: {instructor.expertise}")
        elif choice == 4:
            id = click.prompt("Enter instructor ID", type=int)
            instructor = Instructor.find_by_id(session, id)
            if instructor:
                click.echo(f"ID: {instructor.id}, Name: {instructor.name}, Expertise: {instructor.expertise}")
            else:
                click.echo("Instructor not found on LearnSphere.")
        elif choice == 5:
            id = click.prompt("Enter instructor ID", type=int)
            instructor = Instructor.find_by_id(session, id)
            if instructor:
                if instructor.courses:
                    click.echo(f"Courses taught by {instructor.name} on LearnSphere:")
                    for course in instructor.courses:
                        click.echo(f"Course ID: {course.id}, Title: {course.title}, Duration: {course.duration} hours")
                else:
                    click.echo(f"No courses found for {instructor.name} on LearnSphere.")
            else:
                click.echo("Instructor not found on LearnSphere.")
        elif choice == 6:
            break
        else:
            click.echo("Invalid option.")

def course_menu(session):
    while True:
        click.echo("\nLearnSphere Course Menu")
        click.echo("1. Create Course")
        click.echo("2. Delete Course")
        click.echo("3. List All Courses")
        click.echo("4. Find Course by ID")
        click.echo("5. Back")
        choice = click.prompt("Select an option", type=int, default=0)
        
        if choice == 1:
            title = click.prompt("Enter course title")
            duration = click.prompt("Enter duration (hours)", type=int)
            instructor_id = click.prompt("Enter instructor ID (or 0 for none)", type=int, default=0)
            try:
                course = Course.create(session, title, duration, instructor_id if instructor_id != 0 else None)
                click.echo(f"Course {course.title} created with ID {course.id} on LearnSphere!")
            except ValueError as e:
                click.echo(f"Error: {e}")
        elif choice == 2:
            id = click.prompt("Enter course ID", type=int)
            if Course.delete(session, id):
                click.echo("Course deleted from LearnSphere!")
            else:
                click.echo("Course not found on LearnSphere.")
        elif choice == 3:
            courses = Course.get_all(session)
            if not courses:
                click.echo("No courses found on LearnSphere.")
            for course in courses:
                instructor_name = course.instructor.name if course.instructor else "None"
                click.echo(f"ID: {course.id}, Title: {course.title}, Duration: {course.duration} hours, Instructor: {instructor_name}")
        elif choice == 4:
            id = click.prompt("Enter course ID", type=int)
            course = Course.find_by_id(session, id)
            if course:
                instructor_name = course.instructor.name if course.instructor else "None"
                click.echo(f"ID: {course.id}, Title: {course.title}, Duration: {course.duration} hours, Instructor: {instructor_name}")
            else:
                click.echo("Course not found on LearnSphere.")
        elif choice == 5:
            break
        else:
            click.echo("Invalid option.")

if __name__ == '__main__':
    cli()