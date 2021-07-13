const techStack = [
    {
      name: "HTML",
      logo: "https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png",
    },
    {
      name: "CSS",
      logo: "https://seeklogo.com/images/C/css3-logo-FD8D698B77-seeklogo.com.png",
    },
    {
      name: "JavaScript",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/480px-JavaScript-logo.png",
    },
    {
      name: "React",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png",
    },
    {
      name: "C#",
      logo:
        "https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png",
    },
    {
      name: ".NET Core",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1200px-.NET_Core_Logo.svg.png",
    },
    {
      name: "ASP.NET Core",
      logo: "https://www.natmarchand.fr/wp-content/uploads/2018/05/asp.net_.jpg",
    },
    {
      name: "ADO.NET",
      logo:
        "https://saihasoft.com/uploads/technology/qpmyUPIaL4-ZzUgaBnVOve7padZhP5Nm.jpg",
    },
    {
      name: "SQL Server",
      logo: "https://cdn.worldvectorlogo.com/logos/microsoft-sql-server.svg",
    },
    {
      name: "Postman",
      logo:
        "https://mms.businesswire.com/media/20210630005108/en/761650/22/postman-logo-vert-2018.jpg",
    },
    {
      name: "Visual Studio",
      logo:
        "https://1000logos.net/wp-content/uploads/2020/08/Visual-Studio-Logo.png",
    },
    {
      name: "Visual Studio Code",
      logo:
        "https://user-images.githubusercontent.com/674621/71187801-14e60a80-2280-11ea-94c9-e56576f76baf.png",
    },
    {
      name: "Git",
      logo:
        "https://git-scm.com/images/logos/downloads/Git-Icon-Black.png",
    },
    {
      name: "GitHub",
      logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
    }
  ];

  export const getTechStackData = () => shuffleArray(techStack);

  const shuffleArray = (array) =>  {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}