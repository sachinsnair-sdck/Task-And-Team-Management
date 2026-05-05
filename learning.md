Git Set Up 
=================
Create a repo 

# Link your local folder to the cloud
git remote add origin https://github.com/your-username/task-master-devops.git

# Check that it's linked
git remote -v

# Add everything (Git will ignore the stuff in .gitignore automatically)
git add .

# Create the commit
git commit -m "chore: initial project structure with backend and frontend placeholders"

Create classic token and give as password when pushing

# Push to the main branch
git branch -M main
git push -u origin main

