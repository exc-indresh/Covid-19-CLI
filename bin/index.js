#! /usr/bin/env node
const states = require("../utils/states")
const districts = require("../utils/districts")
const slots = require("../utils/slots")
const { program } = require('commander');

program
  .command('states')
  .description('list down all states')
  .action(states);
program
  .command('districts <stateid>')
  .description('Get all the district by the state id')
  .action(districts);
program
  .command('slots')
  .description('Get all slots(api deleted)')
  .action(slots);

program.parse();



