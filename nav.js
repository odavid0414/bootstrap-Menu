function openNav() 
{
  document.getElementById("SideMenu").style.width = "250px";
  document.getElementById("Open").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() 
{
  document.getElementById("SideMenu").style.width = "0";
  document.getElementById("Open").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}

function openNavMobile() 
{
  document.getElementById("SideMenuMobile").style.height = "100%";
}

function closeNavMobile() 
{
  document.getElementById("SideMenuMobile").style.height = "0";
}