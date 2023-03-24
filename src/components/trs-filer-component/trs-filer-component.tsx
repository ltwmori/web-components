import { Component, h, Host, Prop, State } from "@stencil/core";
import { trsFilerBackend } from "../../../config.js";
import axios from "axios";
import { renderLoaderGetStarted, renderContent } from "../../utils/utils.js";

@Component({
  tag: "trs-filer-component",
  styleUrl: "trs-filer-component.css",
  scoped: true,
})
export class TRSFilerComponent {
  @Prop() itemsPerPage?: number = 5;
  @State() tools: any[] = [];
  @State() searchService: string = "";
  @State() serviceIsOpen: boolean[];
  @State() page: number = 0;
  @State() filter: string = "All";

  componentDidLoad() {
    // this.fetchTools();
    axios.get(`${trsFilerBackend}/tools`).then((response) => {
      this.tools = response.data;
      console.log(this.tools);
    });
  }

  componentWillLoad() {
    let tempServiceIsOpen: boolean[] = [];
    this.tools.forEach(() => {
      tempServiceIsOpen = [...tempServiceIsOpen, false];
    });
    this.serviceIsOpen = [...tempServiceIsOpen];
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
      const response = await axios.get(
        `${trsFilerBackend}/tools/${toolId}/versions`
      );
      console.log(response.data);
      // TODO: handle the response data
    } catch (error) {
      console.error(error);
    }
  }

  async fetchVersion(toolId: string, versionId: string) {
    try {
      const response = await axios.get(
        `${trsFilerBackend}/tools/${toolId}/versions/${versionId}`
      );
      console.log(response.data);
      // TODO: handle the response data
    } catch (error) {
      console.error(error);
    }
  }

  async fetchToolDescriptor(toolId: string, versionId: string, type: string) {
    try {
      const response = await axios.get(
        `${trsFilerBackend}/tools/${toolId}/versions/${versionId}/${type}/descriptor`
      );
      console.log(response.data);
      // TODO: handle the response data
    } catch (error) {
      console.error(error);
    }
  }

  async fetchAdditionalToolDescriptor(
    toolId: string,
    versionId: string,
    type: string,
    relativePath: string
  ) {
    try {
      const response = await axios.get(
        `${trsFilerBackend}/tools/${toolId}/versions/${versionId}/${type}/descriptor/${relativePath}`
      );
      console.log(response.data);
      // TODO: handle the response data
    } catch (error) {
      console.error(error);
    }
  }

  async fetchTests(toolId: string, versionId: string, type: string) {
    try {
      const response = await axios.get(
        `${trsFilerBackend}/tools/${toolId}/versions/${versionId}/${type}/tests`
      );
      console.log(response.data);
      // TODO: handle the response data
    } catch (error) {
      console.error(error);
    }
  }

  async fetchFiles(toolId: string, versionId: string, type: string) {
    try {
      const response = await axios.get(
        `${trsFilerBackend}/tools/${toolId}/versions/${versionId}/${type}/files`
      );
      console.log(response.data);
      // TODO: handle the response data
    } catch (error) {
      console.error(error);
    }
  }

  async fetchContainerSpecification(toolId: string, versionId: string) {
    try {
      const response = await axios.get(
        `${trsFilerBackend}/tools/${toolId}/versions/${versionId}/containerfile`
      );
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

  handleSearchQuery = (e) => {
    this.searchService = (e.target as HTMLInputElement).value;
  };

  toggleOpen = (index: number) => {
    let tempServiceIsOpen: boolean[] = this.serviceIsOpen;
    tempServiceIsOpen[index] = !tempServiceIsOpen[index];
    this.serviceIsOpen = [...tempServiceIsOpen];
  };

  renderSearchBar = () => {
    return (
      <div class="flex">
        <input
          class="flex-1 text-sm border-2 py-2 px-3 focus:outline-none rounded-lg focus:shadow mr-2"
          placeholder="Search by service name..."
          value={this.searchService}
          onInput={(e) => this.handleSearchQuery(e)}
        ></input>
        <button class="py-2 px-5 bg-primary text-xs text-white rounded-lg focus:outline-none w-24">
          All
        </button>
      </div>
    );
  };

  renderServices = () => {
    return this.tools.map((tool, index) => {
      return (
        <div
          class={`flex-row border-2 border-gray-100 rounded-lg hover:shadow-md mt-2 px-3 py-2 ${
            this.serviceIsOpen[index] ? "shadow-md" : "shadow-sm"
          }`}
        >
          <div
            class={`flex justify-between cursor-pointer focus:outline-none ${
              this.serviceIsOpen[index] ? "border-b-2 pb-2" : ""
            }`}
            onClick={() => this.toggleOpen(index)}
          >
            <div
              class={`title text-lg font-semibold`}
            >{`Tool with ID: ${tool.id}`}</div>
            <div class="mt-0.5">
              <span class="text-xs italic font-extralight mr-2">
                {tool.type}
              </span>
              {this.serviceIsOpen[index] ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 inline"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 inline"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              )}
            </div>
          </div>

          <div
            class={`wc-service-index-${index} ${
              this.serviceIsOpen[index] ? "" : "hidden"
            } pt-2 text-left`}
          >
            <a
              href={tool.documentationUrl}
              class="text-primary text-xs font-bold cursor-pointer border-b-2 border-white transition ease-out duration-500 hover:border-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {tool.url}
            </a>
            <div class="text-gray-500">{tool.desription}</div>
            <br></br>
            <div>
              <div class="">
                <span class="">Service Id:</span>{" "}
                <span class="font-mono">{tool.id}</span>
              </div>
              <div class="text-base">
                <span class="">Organization:</span> {tool.organization.name}{" "}
                <a
                  href={tool.organization.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 mb-1 ml-2 text-primary inline"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                </a>
                <a
                  href={tool.contactUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 mb-1 ml-1.5 text-primary inline"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
              </div>
              <div class="text-base">
                <span class="">Version:</span>{" "}
                <span class="font-mono">{tool.meta_version}</span>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

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
            <div class="mt-4 text-center">
              <div class="text-lg font-semibold mb-4">Service Manager</div>
              {this.renderSearchBar()}
              <div class="border-gray-200">{this.renderServices()}</div>
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
