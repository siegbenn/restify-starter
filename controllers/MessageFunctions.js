var pg = require('pg');
var conString = "postgres://gmsw:gmsw2015@vaps.cbxyqfgxpfct.us-east-1.rds.amazonaws.com/vaps";

/** @module MessageFunctions */
/** @class */
function MessageFunctions() {

	/** 
	 * Returns messages JSON object.
	 * @returns {Json} messages
	 */
	this.allMessages = function(callback) {
		var messages = [{'charger_current_in': 12.9, 'total_energy_out': 4.0, 'max_power_in': 1.9, 'max_power_out': 0.2, 'charger_voltage_in': 100.6, 'timestamp': '20150429144334', 'message': 'CHARGE_PCS', 'id': 'VAPS01', 'total_energy_in': 5.3},
{'max_cell_voltage': 4.3, 'soc_value_of_beginning': 81.1, 'soc_value_of_end': 10.6, 'min_cell_voltage': 4.1, 'timestamp': '20150429144334', 'message': 'CHARGE_BATT', 'min_module_temp': 14.4, 'id': 'VAPS01', 'max_module_temp': 14.2},
{'max_power_out': 22.9, 'timestamp': '20150429144334', 'max_module_temp': 55.1, 'min_module_temp': 31.3, 'max_cell_voltage': 4.1, 'message': 'DISCHARGE_BATT', 'battery_voltage_of_end': 233.2, 'id': 'VAPS01', 'soc_value_of_end': 14.3, 'total_energy_out': 9.3, 'battery_voltage_of_start': 266.8, 'soc_value_of_beginning': 38.1, 'min_cell_voltage': 4.2},
{'total_energy_out': 14.5, 'max_power_out': 12.1, 'timestamp': '20150429144334', 'current_out': 10.5, 'voltage_out': 2.5, 'message': 'DISCHARGE_12V', 'id': 'VAPS01'},
{'total_energy_out': 12.5, 'max_power_out': 15.1, 'timestamp': '20150429144334', 'current_out': 17.5, 'voltage_out': 3.5, 'message': 'DISCHARGE_48V', 'id': 'VAPS01'},
{'total_energy_out': 15.5, 'max_power_out': 24.1, 'timestamp': '20150429144334', 'current_out': 13.5, 'voltage_out': 120.5, 'message': 'DISCHARGE_120V', 'id': 'VAPS01'},
{'timestamp': '20150429144334', 'message': 'SYSTEM', 'fault': 200.0, 'id': 'VAPS01', 'system_status': 'INITIALIZE'}];
		// pg.connect(conString, function(err, client, done) {
		// 	if (err) {
		// 		callback('error fetching client from pool', err);
		// 	}
		// 	client.query('SELECT $1::int AS number', ['1'], function(err, result) {
		// 		done();

		// 		if (err) {
		// 			callback('error running query', err);
		// 		}
		// 		var result = (result.rows[0].number);
		// 		callback(result)
		// 	});
		// });
		callback(messages)
	}
}

module.exports = MessageFunctions;