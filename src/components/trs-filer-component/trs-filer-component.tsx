import { Component, h, State } from '@stencil/core';
import { trsFilerBackend } from "../../../config.js";
import axios from 'axios';

@Component({
  tag: 'trs-filer-component',
  styleUrl: 'trs-filer-component.css',
  scoped: true,
})
export class TRSFilerComponent {
  @State() tools: any[] = [];

  componentDidLoad() {
    this.fetchTools();
  }

  async fetchTools() {
    try {
      const response = await axios.get(`${trsFilerBackend}/tools`);
      this.tools = response.data;
    } catch (error) {
      console.error(error);
    }
  }

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
      <div>
        {/* TODO: render the tools list */}
      </div>
    );
  }
}
