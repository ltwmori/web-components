import { Component, h, Host, State } from '@stencil/core';
import { trsFilerBackend } from "../../../config.js";
import axios from 'axios';
import { renderLoaderGetStarted, renderContent } from "../../utils/utils.js";

@Component({
  tag: 'trs-filer-component',
  styleUrl: 'trs-filer-component.css',
  scoped: true,
})
export class TRSFilerComponent {
  @State() tools: any[] = [];

  componentDidLoad() {
    // this.fetchTools();
    axios
      .get(`${trsFilerBackend}/tools`)
      .then((response) => {
        this.tools = response.data;
      });
  }

  // async fetchTools() {
  //   try {
  //     const response = await axios.get(`${trsFilerBackend}/tools`);
  //     this.tools = response.data;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  async fetchVersions(toolId: string) {
    try {
      const response = await axios.get(`${trsFilerBackend}/tools/${toolId}/versions`);
      console.log(response.data);
      // TODO: handle the response data
    } catch (error) {
      console.error(error);
    }
  }

  async fetchVersion(toolId: string, versionId: string) {
    try {
      const response = await axios.get(`${trsFilerBackend}/tools/${toolId}/versions/${versionId}`);
      console.log(response.data);
      // TODO: handle the response data
    } catch (error) {
      console.error(error);
    }
  }

  async fetchToolDescriptor(toolId: string, versionId: string, type: string) {
    try {
      const response = await axios.get(`${trsFilerBackend}/tools/${toolId}/versions/${versionId}/${type}/descriptor`);
      console.log(response.data);
      // TODO: handle the response data
    } catch (error) {
      console.error(error);
    }
  }

  async fetchAdditionalToolDescriptor(toolId: string, versionId: string, type: string, relativePath: string) {
    try {
      const response = await axios.get(`${trsFilerBackend}/tools/${toolId}/versions/${versionId}/${type}/descriptor/${relativePath}`);
      console.log(response.data);
      // TODO: handle the response data
    } catch (error) {
      console.error(error);
    }
  }

  async fetchTests(toolId: string, versionId: string, type: string) {
    try {
      const response = await axios.get(`${trsFilerBackend}/tools/${toolId}/versions/${versionId}/${type}/tests`);
      console.log(response.data);
      // TODO: handle the response data
    } catch (error) {
      console.error(error);
    }
  }

  async fetchFiles(toolId: string, versionId: string, type: string) {
    try {
      const response = await axios.get(`${trsFilerBackend}/tools/${toolId}/versions/${versionId}/${type}/files`);
      console.log(response.data);
      // TODO: handle the response data
    } catch (error) {
      console.error(error);
    }
  }

  async fetchContainerSpecification(toolId: string, versionId: string) {
    try {
      const response = await axios.get(`${trsFilerBackend}/tools/${toolId}/versions/${versionId}/containerfile`);
      console.log(response.data);
      // TODO: handle the response data
    } catch (error) {
      console.error(error);
    }
  }

  async fetchToolClasses() {
    try {
      const response = await axios.get(`${trsFilerBackend}/toolClasses`);
      console.log(response.data);
      // TODO: handle the response data
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <Host>
      <div class="leading-relaxed my-3 tracking-wide dark:text-gray-200 text-3xl font-bold">
        TRS Filer Component
      </div>
      <div class="my-3">
        <div class="border-gray-100 rounded-lg p-3 border shadow-md my-5">
          <div class="text-sm font-semibold w-full border-b-2 border-gray-100 pb-2">
            Component Demo
          </div>
          <div class="mt-4">
            <wc-elixir-service></wc-elixir-service>
          </div>
        </div>
        {this.tools.length === 0
            ? renderLoaderGetStarted()
            : //@ts-ignore
              renderContent(this.tools)}
      </div>
    </Host>
    );
  }
}
