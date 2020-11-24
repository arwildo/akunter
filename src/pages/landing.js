import React from 'react';

class Landing extends React.Component {

	render() {
		return (
      <div className="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
        <div className="sm:flex sm:items-center px-6 py-4">
          <div className="text-center">
            <div className="mb-4">
              <p className="text-xl leading-tight mx-auto">Starter</p>
            </div>
            <div>
              <button className="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border hover:text-blue-500">Button</button>
            </div>
          </div>
        </div>
      </div>
		);
	}
}

export default Landing;
