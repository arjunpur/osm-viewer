import React from 'react';
import { render } from 'react-dom';
import { Map, Marker, Popup, TileLayer, BaseTileLayer, FeatureGroup, Circle } from 'react-leaflet';
import { EditControl } from "react-leaflet-draw"
import "leaflet/dist/leaflet.css";

var Leaflet = React.createClass({
  _onEditPath: function() {
      console.log("hi");
  },
  _onCreate: function() {
      console.log("more hi");
  },
  _mounted: function() {
      console.log("mounted");
  },
  _onDeleted: function() {
      console.log("deleted");
  },
  render: function() {
    const style = {
      minHeight: "800px", width: "100%"
    };
    let mapLayers = _.map(this.props.url, u => {
      return <TileLayer url={u} />;
    });

    return (
      <Map center ={[37.062,-121.530]} zoom={8} style={style} bounds={this.props.bounds}>
        <TileLayer
          url="http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png"
        />
    <FeatureGroup>
        <EditControl
          position='topleft'
          onEdited={this._onEditPath}
          onCreated={this._onCreate}
          onDeleted={this._onDeleted}
          onMounted={this._mounted}
          draw={{
            rectangle: false
          }}
        />
    </FeatureGroup>
        {mapLayers}
      </Map>
    );

    // return (
    //   <Map boundsOpt={bounds} zoom={8} style={style} maxZoom={12}>
    //     <TileLayer
    //       url="http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png"
    //       attribution='&copy; CartoDB'
    //     />
    //     {mapLayers}
    //   </Map>
    // );
  }
});

module.exports = Leaflet;
