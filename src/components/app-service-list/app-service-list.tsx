import { Component, Host, h, State } from '@stencil/core';
import { componentProps } from '../../types';

@Component({
  tag: 'app-service-list',
  styleUrl: 'app-service-list.css',
  scoped: true,
})
export class AppServiceList {
  @State() componentProps: componentProps[] = [
    {
      name: 'authToken',
      type: 'string',
    },
    {
      name: 'itemsPerPage',
      type: 'number',
      default: '5',
    },
  ];

  renderProps = () => {
    return this.componentProps.map(prop => {
      return (
        <div class="w-full border-gray-200 border-b-2 grid grid-cols-3 gap-10 my-2.5">
          <div>{prop.name}</div>
          <div class="font-mono ">
            <div class="bg-gray-100 w-max">{prop.type}</div>
          </div>
          <div>{prop.default}</div>
        </div>
      );
    });
  };

  render() {
    return (
      <Host>
        <div class="text-3xl font-semibold mb-5">Service List Component</div>
        <div class=" my-10">
          <div class="border-gray-100 rounded-lg p-3 border-2 my-10">
            <div class="text-sm font-semibold w-full border-b-2 border-gray-100 pb-2">Component Demo</div>
            <div class="mt-4">
              <wc-elixir-utils-service-list></wc-elixir-utils-service-list>
            </div>
          </div>
          <div class="text-3xl my-5">Usage</div>
          <div class="text-2xl mt-5">Principle</div>
          <div class="my-3 leading-7">
            Service list component list out all the service's avaliable to the user. All the services shown to the user can be classified into three main categories:-
            <ul class="mt-1">
              <li>Owned: Services which are owened by the user.</li>
              <li>Added: Services which are added by the user.</li>
              <li>Services which are avaliable to the user to add.</li>
            </ul>
          </div>
          <div class="text-2xl mt-5">Implementation</div>
          <div class="my-3 leading-7">
            This component can we used by:
            <button class="bg-gray-100 py-1 font-mono px-2 ml-2 cursor-text focus:outline-none">&lt;wc-elixir-utils-service-list&gt;</button>
          </div>
          <div>
            <div class="my-10">
              <div class="text-2xl">Props</div>
              <div class="my-3 leading-7">
                <div class="lg:mr-32">
                  <div class="w-full border-gray-200 border-b-2 text-sm grid grid-cols-3 gap-10">
                    <div>Prop Name</div>
                    <div>Type</div>
                    <div>Default</div>
                  </div>
                  {this.renderProps()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
