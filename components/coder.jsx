const coder = {
  name: "Md Rakib Ali",
  skills: ["Javascript","Typescript","React","Nextjs","Redux","Node","Express","Mongodb",
  ],
  hardWorker: true,
  problemSolver: true,
  hireable: function(){
    return (
        this.hardWorker &&
        this.problemSolver &&
        this.skills.length>=8
    )
  }
};
coder()



