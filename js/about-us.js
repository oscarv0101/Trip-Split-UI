const Link = document.querySelectorAll('a');
const LinkArray = Array.from(Link);

LinkArray.map( p => {
    p.addEventListener('mouseover', p => {
      TweenMax.to(p.currentTarget, 1, {scale: 1.1, ease:Bounce.easeOut})
    })
  })
  
  LinkArray.map( p => {
    p.addEventListener('mouseout', p => {
      TweenMax.to(p.currentTarget, 1, {scale: 1, ease:Bounce.easeOut})
    })
  })

  const Team = document.querySelectorAll('.team-wrapper');
const TeamArray = Array.from(Team);

TeamArray.map( p => {
    p.addEventListener('mouseover', p => {
      TweenMax.to(p.currentTarget, 1, {scale: 1.1, ease:Bounce.easeOut})
    })
  })
  
  TeamArray.map( p => {
    p.addEventListener('mouseout', p => {
      TweenMax.to(p.currentTarget, 1, {scale: 1, ease:Bounce.easeOut})
    })
  })

  const TeamCode = document.querySelectorAll('.team-code');
  const TeamCodeArray = Array.from(TeamCode);
  
  TeamCodeArray.map( p => {
      p.addEventListener('mouseover', p => {
        TweenMax.to(p.currentTarget, 1, {scale: 1.1, ease:Bounce.easeOut})
      })
    })
    
    TeamCodeArray.map( p => {
      p.addEventListener('mouseout', p => {
        TweenMax.to(p.currentTarget, 1, {scale: 1, ease:Bounce.easeOut})
      })
    })