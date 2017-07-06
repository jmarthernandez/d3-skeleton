import * as d3 from 'd3';
import drawCourt from './court';

// style configs
const width = 940;
const height = 500;

const svg = d3.select('#chart').append('svg')
  .attr('id', 'viz')
  .attr('width', width)
  .attr('height', height);

const draw = () => drawCourt(svg);
export default draw;
