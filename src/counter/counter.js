import { connect } from "react-redux";
import * as actions from "../actions/actions";
import { bindActionCreators } from "redux";

const Counter = ({ value, incremented, decremented, random }) => {
	return (
		<div className="jumbotron">
			<h2 id="counter">{value}</h2>
			<button id="dec" onClick={() => decremented()} className="btn btn-primary btn-lg">
				DEC
			</button>
			<button id="inc" onClick={() => incremented()} className="btn btn-primary btn-lg">
				INC
			</button>
			<button id="rnd" onClick={() => random()} className="btn btn-primary btn-lg">
				RANDOM
			</button>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		value: state.value,
	};
};

const mapDispatchToProps = (dispath) => {
	return bindActionCreators(actions, dispath)

}

export default connect(mapStateToProps, actions)(Counter);
