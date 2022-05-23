import "./PlayerListItem.css";

export function PlayerListItem(props) {
  return (
    <div className="player-list-item">
      <p id={`player_${props.player.id}`}>
        {props.player.first_name} {props.player.last_name}
      </p>
    </div>
  );
}
