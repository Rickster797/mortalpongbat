onSubmit(e) {
    e.preventDefault();
    let { players } = this.state;
    if (e.target.value !== "") {
    this.setState({ 
      showTournament: true,
      players: [...players, e.target.value]
    }) 
  } else {
    this.setState({ 
      error: true,
      players: [...players, e.target.value]
    })
  }
