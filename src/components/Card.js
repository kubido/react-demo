import React from 'react'


class Card extends React.Component {

  render() {
    return (
      <div style={styles.card}>
        <h1> {this.props.title} </h1>
        <p> Description </p>
      </div>
    )
  }
}

const styles = {
  card: {
    marginBottom: "10px",
    border: '1px solid red'
  }
}

export default Card